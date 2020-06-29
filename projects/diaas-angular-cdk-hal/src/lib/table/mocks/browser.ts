import { setupWorker, rest } from 'msw';
import { createMockHandlers } from './mock-handlers';

const worker = setupWorker(...createMockHandlers(rest));

worker.start();
console.log("workerstart:",worker)

export { worker, rest };