//catches any error thrown in async functions
export default function asyncWrapper(callback) {
  return function (req, res, next) {
    callback(req, res, next).catch(next);
  };
}
