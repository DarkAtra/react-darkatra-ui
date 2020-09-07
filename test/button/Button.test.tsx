import {render} from '@testing-library/react';
import React from 'react';
import {Button} from '../../src';

describe('button component test', () => {

    it('should render without crashing', () => {
        const {container} = render(<Button>content</Button>);

        expect(container.firstChild).not.toBeNull();
    });

    it('should render without prefix and suffix', () => {
        const {container} = render(<Button>content</Button>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('button');
        expect(container.firstChild!!.firstChild).toBeContent();
    });

    it('should render with prefix', () => {
        const {container} = render(<Button prefix={'prefix'}>content</Button>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('button');
        expect(container.firstChild!!.firstChild).toBePrefix();
        expect(container.firstChild!!.lastChild).toBeContent();
    });

    it('should render with suffix', () => {
        const {container} = render(<Button suffix={'suffix'}>content</Button>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('button');
        expect(container.firstChild!!.firstChild).toBeContent();
        expect(container.firstChild!!.lastChild).toBeSuffix();
    });

    it('should render with prefix and suffix', () => {
        const {container} = render(<Button prefix={'prefix'} suffix={'suffix'}>content</Button>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('button');

        expect(container.firstChild!!.firstChild).toBePrefix();
        expect(container.firstChild!!.childNodes.item(1)).toBeContent();
        expect(container.firstChild!!.lastChild).toBeSuffix();
    });

    it('should preserve css classes', () => {
        const {container} = render(<Button className="test-class">content</Button>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('button', 'test-class');
    });

    it('should preserve css styles', () => {
        const {container} = render(<Button style={{textAlign: 'center'}}>content</Button>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveStyle('text-align: center;');
    });
});
