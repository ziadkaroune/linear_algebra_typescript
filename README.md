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