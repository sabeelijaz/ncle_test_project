import 'jest';
import TaskStore from '../../src/store';
import Task from '../../src/interfaces/Task';

describe('task store unit test', () => {
    let store: Array<Task>;

    beforeEach(() => {
        store = TaskStore.getTaskStore();
    });

    it('should be valid instance', async () => {
        expect(store).toBeInstanceOf(Array<Task>);
        expect(store).toBeDefined();
    });

    it('should return predefined instance', async () => {
        store = TaskStore.getTaskStore();
        expect(store).toBeInstanceOf(Array<Task>);
        expect(store).toBeDefined();
    });
});