import '@testing-library/jest-dom';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBePrefix(className?: string, content?: string): R;

            toBeContent(className?: string, content?: string): R;

            toBeSuffix(className?: string, content?: string): R;
        }
    }
}

expect.extend({
    toBePrefix: (element, className = 'prefix', content = 'prefix') => {
        if (element !== null && element !== undefined
            && element.classList.contains(className)
            && element.textContent === content) {
            return {
                pass: true,
                message: () => 'Expected ${element} not to be a prefix.'
            };
        }

        return {
            pass: false,
            message: () => `Expected ${element} to be a prefix.`
        };
    },
    toBeContent: (element, className = 'content', content = 'content') => {
        if (element !== null && element !== undefined
            && element.classList.contains(className)
            && element.textContent === content) {
            return {
                pass: true,
                message: () => 'Expected ${element} not to be a content.'
            };
        }

        return {
            pass: false,
            message: () => `Expected ${element} to be a content.`
        };
    },
    toBeSuffix: (element, className = 'suffix', content = 'suffix') => {
        if (element !== null && element !== undefined
            && element.classList.contains(className)
            && element.textContent === content) {
            return {
                pass: true,
                message: () => 'Expected ${element} not to be a suffix.'
            };
        }

        return {
            pass: false,
            message: () => `Expected ${element} to be a suffix.`
        };
    }
});
