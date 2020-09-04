import {render} from '@testing-library/react';
import React from 'react';
import {Alert} from '../../src';
import {getThemeColorRgba, ThemeColor} from '../../src/utils/ThemeColor';

describe('alert component test', () => {

    it('should render without crashing', () => {
        const {container} = render(<Alert>content</Alert>);

        const alert = container.firstChild;
        expect(alert).not.toBeNull();
    });

    it('should render without prefix and suffix', () => {
        const {container} = render(<Alert>content</Alert>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('alert');
        expect(container.firstChild!!.firstChild).toBeContent();
    });

    it('should render with prefix', () => {
        const {container} = render(<Alert prefix={'prefix'}>content</Alert>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('alert');
        expect(container.firstChild!!.firstChild).toBePrefix();
        expect(container.firstChild!!.lastChild).toBeContent();
    });

    it('should render with suffix', () => {
        const {container} = render(<Alert suffix={'suffix'}>content</Alert>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('alert');
        expect(container.firstChild!!.firstChild).toBeContent();
        expect(container.firstChild!!.lastChild).toBeSuffix();
    });

    it('should render with prefix and suffix', () => {
        const {container} = render(<Alert prefix={'prefix'} suffix={'suffix'}>content</Alert>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('alert');

        expect(container.firstChild!!.firstChild).toBePrefix();
        expect(container.firstChild!!.childNodes.item(1)).toBeContent();
        expect(container.firstChild!!.lastChild).toBeSuffix();
    });

    it('should preserve css classes', () => {
        const {container} = render(<Alert className="test-class">content</Alert>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveClass('alert', 'test-class');
    });

    it('should preserve css styles', () => {
        const {container} = render(<Alert style={{textAlign: 'center'}}>content</Alert>);

        expect(container.firstChild).toBeDefined();
        expect(container.firstChild!!).toHaveStyle('text-align: center;');
    });

    xit('should set css variables based on the theme color defaulting to PRIMARY', () => {
        const {container} = render(<Alert>content</Alert>);

        expect(container.firstChild).toBeDefined();

        const expectedThemeColorRgba = getThemeColorRgba(ThemeColor.PRIMARY);
        expect(container.firstChild).toHaveStyle({
            '--theme-color-r-xs': expectedThemeColorRgba.r,
            '--theme-color-g-xs': expectedThemeColorRgba.g,
            '--theme-color-b-xs': expectedThemeColorRgba.b,
            '--theme-color-a-xs': expectedThemeColorRgba.a
        });
    });
});
