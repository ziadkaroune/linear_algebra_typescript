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