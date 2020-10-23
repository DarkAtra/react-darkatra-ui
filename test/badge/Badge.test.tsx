import {render} from '@testing-library/react';
import React from 'react';
import {Badge} from '../../src';

describe('badge component test', () => {

    it('should render without crashing', () => {
        const {container} = render(<Badge>content</Badge>);

        const badge = container.firstChild;
        expect(badge).not.toBeNull();
    });

    it('should render without prefix and suffix', () => {
        const {container} = render(<Badge>content</Badge>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('badge');
        expect(container.firstChild!!.firstChild).toBeContent();
    });

    it('should render with prefix', () => {
        const {container} = render(<Badge prefix={'prefix'}>content</Badge>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('badge');
        expect(container.firstChild!!.firstChild).toBePrefix();
        expect(container.firstChild!!.lastChild).toBeContent();
    });

    it('should render with suffix', () => {
        const {container} = render(<Badge suffix={'suffix'}>content</Badge>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('badge');
        expect(container.firstChild!!.firstChild).toBeContent();
        expect(container.firstChild!!.lastChild).toBeSuffix();
    });

    it('should render with prefix and suffix', () => {
        const {container} = render(<Badge prefix={'prefix'} suffix={'suffix'}>content</Badge>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('badge');

        expect(container.firstChild!!.firstChild).toBePrefix();
        expect(container.firstChild!!.childNodes.item(1)).toBeContent();
        expect(container.firstChild!!.lastChild).toBeSuffix();
    });

    it('should preserve css classes', () => {
        const {container} = render(<Badge className="test-class">content</Badge>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('badge', 'test-class');
    });

    it('should preserve css styles', () => {
        const {container} = render(<Badge style={{textAlign: 'center'}}>content</Badge>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveStyle('text-align: center;');
    });
});
