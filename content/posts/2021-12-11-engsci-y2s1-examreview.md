---
title: "Engsci Y2S1 Exam Review"
date: 2021-12-11T22:16:12-05:00
draft: true
katex: true
---

{{< toc >}}

## CHE260
Note: the following only contains materials for the final exam, so it will *only* cover the heat-transfer portion of CHE260.


### Variables
Below are some variables and what they generally mean in the context of CHE260

- \\(k\\): Thermal conductivity constant. Larger for good heat conductors, lower for ones that do so poorly
- \\(h\\): Convection heat transfer coefficient
- \\(\alpha = \frac{k}{\rho c_p}\\): Thermal diffusivity
- \\(T_{film} = \frac{T_s + T_\infty}{2}\\): Film temperature: estimated temperature at the convection layer
- \\(\\)
- \\(\\)
- \\(\\)

### Heat Transfer Mechanisms




### Fins



### Transient Heat Transfer

$$L_c = \frac{V}{A_{surface}} \tag{characteristic length}$$
$$Bi = \frac{hL_c}{k} \tag{Biot number}$$

Lumped system approximation is valid for $$Bi \leq 0.1$$

We then can get the following by solving the heat equation

$$b = \frac{hA_s}{\rho c_p V} = \frac{h}{\rho c_p L_c}, [b] = s^{-1}$$

$$\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-bt}$$

Most questions will then get you to plug in the boundary conditions \\(T_i, T(t), T_\infty\\)  and then have you solve for \\(t\\) or some combination thereof.

Procedure:
1. Determine \\(L_c\\)
2. Determine \\(Bi\\) and check if lumped system is valid
3. Plug into heat equation and solve for unknown


if \\(Bi > 0.1\\), then you will have to do some more work.

1. Assume \\(\tau>0.2\\) so one-term approximation is valid
2. Given \\(Bi\\), look up in reference table to find \\(\lambda_1\\) and \\(A_1\\)
3. Plug into the right expression for dimensionless temperature \\(\theta = e^{-Bi*\tau}\\). Below is the one-term expression for a plane wall. They all generally have a similar form.

$$\frac{T(x, t) - T_\infty}{T_i - T_\infty} = A_1e^{-\lambda_1^2\tau}\cos{\frac{\lambda_1 x}{L}}$$
and note that in this expression time is w.r.t. dimensionless time \\(\tau\\) -- so to convert back to dimensioned time we apply
$$\tau = \frac{\alpha t}{L^2}$$
to recover \\(t\\).

Note that at the center of a plane wall/cylinder/sphere/etc the above expression can be simplified to 
$$\frac{T(0, t) - T_\infty}{T_i - T_\infty} = A_1e^{-\lambda_1^2\tau}$$

For some questions (for example a plane wall cooled on both sides) we can express \\(T(x,t)\\) w.r.t \\(T(0, t)\\), i.e. \\(T(x, t) = T(0, t)\cos{\lambda_1 x/L}\\)



For heat transfer we express it as a % of the maximum heat transfer.

Given

$$Q_{max} = mc_p(T_\infty - T_i)$$ 

which denotes heat transfer as \\(t\rightarrow\infty\\)

we derive a ratio \\(\frac{Q(t)}{Q_{max}}\\) for different geometries, which should be given.
\\(Q(t)\\) is the sum of internal energy changes throughout the entire geometry which can be expressed as a volume integral.




#### Semi-Infinite Solids
Used to model temperature change in part of body due to thermal conditions on a single surface

$$\eta = \frac{x}{\sqrt{4\alpha t}}$$

For constant \\(T_s\\) we obtain

$$\frac{T(x,t)-T_i}{T_s-T_i} = erfc(\eta)$$

and 

$$\dot{q}_s(t) = \frac{k(T_s-T_i)}{\sqrt{\pi\alpha t}}$$

where

$$erfc(\eta) = 1- \frac{2}{\sqrt{\pi}}\int^\eta_0 e^{-u^2}du$$

Generally we will be looking up \\(\eta, erfc(\eta)\\) in a table.



#### Misc
Thermal diffusivity



### Forced Convection Heat Transfer
TLDR: What if we forced fluids instead of let the convection happen naturally?

We know that 

$$Q_{conv} = hA(T_s - T_\infty)$$

But how do we get \\(h\\) for forced convection? Either look it up from a table, get it experimentally, or do some math.

$$h=\frac{-k_{fluid}(\frac{\delta T}{\delta y}\vert_{y=0})}{T_s-T_\infty}$$
Note that the temperature distribution for a moving fluid isn't constant.
We can usually use an average one
$$h=\frac{1}{A_s}\int_{A_s}h_{local}dA_s$$

Note: surface integral for the 2D case, and the over length \\(L\\) for the 1D.

In cases where the laminar flow region cannot be entirely disregarded, we must integrate over the parts seperately

$$h = \frac{1}{L}(\int_0^{x_a} h_{x, laminar}dx + \int_{x_a}^L h_{x, turbulent}dx)$$


Recall from AER210 the that fluid exerts a drag force \\(\tau\\) on the walls

$$\tau = \mu \frac{\delta\mu}{\delta y} \vert_{y=0}$$

Or,

$$\tau = c_f \frac{\rho v_o^2}{2}$$

where \\(c_f\\) is a friction coefficient which depends on geometry.


Forced convection is described with help from a few numbers


1. Reynold's number \\(Re\\)

$$Re = \frac{\rho V_\infty D}{\mu} = \frac{V_\infty x}{\nu}$$
Note: \\(\nu\\) is kinematic viscoscity \\(\nu = \frac{\mu}{\rho}\\)

Large \\(Re\\) tends towards turbulent flow, small tends towards laminar flow. Generally if \\(Re<5*10^5\\) the flow is laminar and it is turbulent otherwise.

2. Prachett's number \\(Pr\\)

The ratio of molecular diffusivity of momentum over the molecular diffusivity of heat

$$Pr = \frac{v}{\alpha} = \frac{\mu c_p}{k}$$


3. Nusselt's Number \\(Nu\\)
The dimensionless heat transfer coefficient

$$Nu = \frac{hL_c}{k}$$

We can then apply Buckingham \\(\pi\\) to represent \\(Nu\\) w.r.t. \\(Re\\) and \\(Pr\\).

$$Nu_x = \frac{h_xx}{k} = cRe_x^nPr^m$$

Note that here \\(Nu\\) is local to point \\(x\\)


And the coefficients \\(c, m, n\\) can either be solved for with experimental data or will be given.
For example, for laminar flow over a flat plate:

$$Nu = \frac{hL}{k} = 0.664Re_L^{0.5}Pr^{(1/3)}, Re_L < 5*10^5, Pr > 0.6$$

... and for turbulent flow:
$$Nu = \frac{hL}{k} = 0.037Re_L^{0.8}Pr^{(1/3)}, 5*10^5 \leq Re_L \leq 10^7, 0.6 \leq Pr \leq 60 $$

For isothermal surfaces with an unheated starting section of length \\(\xi\\) the local Nusselt's number is given by

laminar :

$$Nu_x = \frac{hL}{k} = \frac{0.332Re_x^{0.5}Pr^{1/3}}{[1-(\xi/x)^{3/4}]^{1/3}}$$


turbulent :

$$Nu_x = \frac{hL}{k} = \frac{0.0296Re_x^{0.8}Pr^{1/3}}{[1-(\xi/x)^{910}]^{1/9}}$$

What is important to note here is that these equations are valid for an isothermal flat plate with an unheated starting section of length \\(\xi=0\\) as well. The equations would be the same as the two above except the denominator is 1.
The previous equations (e.g. \\(c=0.664\\)) are valid for a flat plate heated at the leading edge.



#### General Notes:

- No-slip condition applies at walls, so right by the wall heat transfer is conductive. \\(\dot{q} = \dot{q_{cond}}\\)
-

### Radiation Heat Transfer






## ECE253

## MAT292

## AER210

## PHY293




## ESC203

n/a













