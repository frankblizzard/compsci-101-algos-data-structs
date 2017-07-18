const compose = (
  ...fns
) => val =>
  fns
    .reverse()
    .reduce(
      (
        prevFn,
        nextFn
      ) =>
        nextFn(
          prevFn(
            val
          )
        ),
      val =>
        val
    );

const median = values => {
  const half = Math.floor(
    values.length /
      2
  );

  if (
    values.length %
    2
  ) {
    return half;
  } else {
    return (
      (half +
        (half -
          1)) /
      2.0
    );
  }
};

export {
  compose,
  median
};

export default {
  compose,
  median
};
