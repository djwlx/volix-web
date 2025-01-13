import { useCallback, useRef, useState } from 'react';

interface TaskRunnerParams<T> {
  task: (param?: T) => Promise<any>;
}

function useTaskRunner<T = any>(task: TaskRunnerParams<T>) {
  const [];

  const start = (param?: T) => {};

  return {
    start,
  };
}
export default useTaskRunner;
