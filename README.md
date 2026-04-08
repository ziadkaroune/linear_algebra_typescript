## Exercise 0: Linear Algebra Foundations

Implements fundamental vector and matrix operations:

- **Vector**: Addition, subtraction, and scalar multiplication
- **Matrix**: Element-wise addition and subtraction with dimension checking

Core operations for linear algebra and vector spaces.

## Exercise 1: Linear Combination

Implements linear combination of vectors as a fundamental operation in linear algebra.

A linear combination is a sum of scalar multiples of vectors:
$$\text{result} = c_1v_1 + c_2v_2 + ... + c_nv_n$$

- **linear_combination**: Takes a list of vectors and scalar coefficients, multiplies each vector by its corresponding scalar, and returns their sum
- **Validation**: Ensures the number of vectors matches the number of scalars, throws an error on size mismatch

Essential for solving systems of linear equations and understanding vector spaces.

## Exercise 2: Linear Interpolation

Implements linear interpolation (lerp) between two values, vectors, or matrices.

Linear interpolation finds an intermediate value between two endpoints using a parameter $t$:
$$\text{result} = u + t(v - u), \quad 0 \leq t \leq 1$$

- **lerp**: Generic function supporting numbers and objects (Vector, Matrix), interpolates smoothly between two values
- **Parameter validation**: Ensures $t$ is in the range [0, 1], throws error on type mismatch

Used extensively in computer graphics, animations, audio processing (gain transitions), and any smooth transitions between states.

## Exercise 3: Dot Product

Implements the dot product operation on vectors.

The dot product of two vectors produces a scalar value:
$$\mathbf{a} \cdot \mathbf{b} = a_1b_1 + a_2b_2 + ... + a_nb_n$$

- **dot**: Computes the dot product between two vectors of the same dimension
- **Result**: Returns a scalar value indicating the magnitude of projection and angle relationship

Essential for computing vector magnitudes, measuring orthogonality, projecting vectors, and determining angles between vectors.

## Exercise 4: Vector Norms

Implements different types of vector norms to measure vector magnitude.

Three common vector norms:
- **L1 norm** (Manhattan/Taxicab distance): $\|\mathbf{a}\|_1 = |a_1| + |a_2| + ... + |a_n|$
- **L2 norm** (Euclidean distance): $\|\mathbf{a}\|_2 = \sqrt{a_1^2 + a_2^2 + ... + a_n^2}$
- **L∞ norm** (Infinity/Chebyshev norm): $\|\mathbf{a}\|_\infty = \max(|a_1|, |a_2|, ..., |a_n|)$

- **norm_1, norm_2, norm_inf**: Methods computing different types of vector norms
- **Applications**: Measuring vector magnitude, convergence criteria, optimization, regularization in machine learning

Essential for understanding vector spaces, measuring distances, and optimization problems.

## Exercise 5: Angle Between Vectors

Computes the cosine of the angle between two vectors.

The angle between two vectors can be found using their dot product and norms:
$$\cos(\theta) = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|_2 \cdot \|\mathbf{v}\|_2}$$

- **angle_cos**: Returns the cosine of the angle between two vectors
- **Validation**: Ensures neither vector is a zero vector (denominator cannot be 0)

Used to determine orthogonality, parallelism, and angular relationships between vectors in geometry and physics.

## Exercise 6: Cross Product

Implements the cross product operation for 3D vectors.

The cross product produces a vector perpendicular to both input vectors:
$$\mathbf{u} \times \mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix}$$

- **cross_product**: Computes the cross product of two 3D vectors, returning a perpendicular vector
- **Dimension validation**: Only defined for 3D vectors (R³), throws error otherwise
- **Applications**: Computing surface normals, determining orientation, calculating torque in physics, 3D graphics

Essential for 3D geometry, physics simulations, and computer graphics applications.