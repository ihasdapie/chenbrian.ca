---
title: "Setting up JupyterHub with `c` kernel on raspberry pi and/or binder"
slug: "jupyterhub-rpi-binder"
date: 2022-01-16T00:44:40-05:00
draft: false
katex: false
back_to_top: false
tags: []
website_carbon: true
---


TLDR; I wanted to do *something* with this Raspberry Pi 4 I had lying around. 

Figured I would try to get JupyterHub going on it, maybe with a `c` kernel for my students to use.
Turns out there are a few [issues](https://github.com/matrix-org/synapse/issues/9403) getting jupyterhub built for ARMv7.
Anyhow the primary thing is that the `rust` toolchain must be installed in order to build the `cryptography` python module, and that when installing in a `docker` container the `--sys-prefix` must be passed to `install_c_kernel`.

[Here](https://github.com/ihasdapie/jupyterhub-c-docker-ARM)'s a working `Dockerfile` that does just that.

```dockerfile
LABEL maintainer="Brian Chen<brianchen.chen@mail.utoronto.ca"
FROM arm32v7/python:3.9-bullseye

# Set the variables
ENV DEBIAN_FRONTEND noninteractive

WORKDIR /root

USER root
RUN echo "CHANGEME" | passwd --stdin root

# Install both Python 2 and 3
RUN apt-get update && apt-get upgrade && apt-get install -y python-dev \
	python3-dev \
	python3-pip \
	build-essential\
	libssl-dev \
	libffi-dev \
	python-dev \
	ca-certificates \
	libncurses5-dev \
	curl \
	bash \
	nodejs \
	npm 

# needed for python cryptography
RUN apt-get install -y rustc  


# jupyterhub dependencies
RUN pip3 install --upgrade pip
RUN pip3 install cryptography
RUN pip3 install readline jupyter jupyterhub jupyterlab notebook 
RUN npm install -g configurable-http-proxy

# Fix Python3 kernel since IPykernel 5.0.0 has dependency issues.
RUN pip3 install "ipykernel==4.10.0" --force-reinstall 


# jupyter c kernel

RUN pip3 install jupyter-c-kernel
RUN install_c_kernel --sys-prefix


COPY jupyterhub_config.py jupyterhub_config.py

EXPOSE 8000
```




But turns out my ISP doesn't provide me with a static IP address ... so [binder](https://mybinder.org/) it is.

The neat thing about binder is that it spins up an ephemeral Jupyter instance in a `docker` container, the requirements/environment for which you can specify with a `requirements.txt`, [etc](https://mybinder.readthedocs.io/en/latest/using/config_files.html). 
Or you can just provide a `Dockerfile` that meets [the requirements](https://mybinder.readthedocs.io/en/latest/tutorials/dockerfile.html).

[Here](https://github.com/ihasdapie/teaching/blob/main/Dockerfile) as a working minimal `Dockerfile` for a binder instance with the [jupyter-c-kernel](https://github.com/brendan-rius/jupyter-c-kernel) set up that will work on binder.

```dockerfile
FROM python:3.9-slim
MAINTAINER Brian Chen <brianchen.chen@mail.utoronto.ca

RUN apt-get update && apt-get install -y build-essential

RUN pip install --no-cache --upgrade pip && \
    pip install --no-cache notebook jupyterlab jupyter-c-kernel jupyterhub

ARG NB_USER=jovyan
ARG NB_UID=1000
ENV USER ${NB_USER}
ENV NB_UID ${NB_UID}
ENV HOME /home/${NB_USER}

RUN adduser --disabled-password \
    --gecos "Default user" \
    --uid ${NB_UID} \
    ${NB_USER}

RUN install_c_kernel

COPY . ${HOME}
USER root
RUN chown -R ${NB_UID} ${HOME}
USER ${NB_USER}

WORKDIR ${HOME}
```







































