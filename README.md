# Example configuration Webpack for Worker Runner

Unfortunately, at the time of writing,
if using standard tools to create a **common chunk** for `worker` and the `main area`,
then worker will not be able to load this chunk.
This problem can be solved using the [worker-injector-generator-plugin](https://github.com/onzag/worker-injector-generator-plugin).
(You can also find out the details of the problem there)

[Live example](https://plohoj.github.io/worker-runner-webpack-example/) of a compiled project from this repository
