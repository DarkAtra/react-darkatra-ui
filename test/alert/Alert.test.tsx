import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import {Alert} from '../../src';
import {getThemeColorRgba, ThemeColor} from '../../src/utils/ThemeColor';

describe('alert component test', () => {

    let container: HTMLElement = null as unknown as HTMLElement;

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        if (container != null) {
            unmountComponentAtNode(container);
            container.remove();
            container = null as unknown as HTMLElement;
        }
    });

    it('should render without crashing', () => {
        render(<Alert>Test</Alert>, container);

        const alert = container.querySelector(':first-child');
        expect(alert).not.toBeNull();
    });

    it('should render without prefix and suffix', () => {
        render(<Alert>Test</Alert>, container);

        const alert = container.querySelector(':first-child');
        expect(alert).not.toBeNull();
        expect(alert!!.children.length).toBe(1);
        expect(alert!!.children[0].classList).toContain('content');
        expect(alert!!.children[0].textContent).toBe('Test');
    });

    it('should render with prefix', () => {
        render(<Alert prefix={'prefix'}>Test</Alert>, container);

        const alert = container.querySelector(':first-child');
        expect(alert).not.toBeNull();
        expect(alert!!.children.length).toBe(2);
        expect(alert!!.children[0].classList).toContain('prefix');
        expect(alert!!.children[0].textContent).toBe('prefix');
    });

    it('should render with suffix', () => {
        render(<Alert suffix={'suffix'}>Test</Alert>, container);

        const alert = container.querySelector(':first-child');
        expect(alert).not.toBeNull();
        expect(alert!!.children.length).toBe(2);
        expect(alert!!.children[1].classList).toContain('suffix');
        expect(alert!!.children[1].textContent).toBe('suffix');
    });

    it('should render with prefix and suffix', () => {
        render(<Alert prefix={'prefix'} suffix={'suffix'}>Test</Alert>, container);

        const alert = container.querySelector(':first-child');
        expect(alert).not.toBeNull();
        expect(alert!!.children.length).toBe(3);
        expect(alert!!.children[0].classList).toContain('prefix');
        expect(alert!!.children[0].textContent).toBe('prefix');
        expect(alert!!.children[1].classList).toContain('content');
        expect(alert!!.children[1].textContent).toBe('Test');
        expect(alert!!.children[2].classList).toContain('suffix');
        expect(alert!!.children[2].textContent).toBe('suffix');
    });

    it('should preserve css classes', () => {
        render(<Alert className="test-class">Test</Alert>, container);

        const alert = container.querySelector(':first-child');
        expect(alert).not.toBeNull();
        expect(alert!!.classList).toContain('alert');
        expect(alert!!.classList).toContain('test-class');
    });

    it('should preserve css styles', () => {
        render(<Alert style={{textAlign: 'center'}}>Test</Alert>, container);

        const alert = container.querySelector<HTMLDivElement>(':first-child');
        expect(alert).not.toBeNull();
        expect(alert!!.style.textAlign).toBe('center');
    });

    xit('should set css variables based on the theme color defaulting to PRIMARY', () => {
        act(() => render(<Alert>Test</Alert>, container));

        const alert = container.querySelector<HTMLDivElement>(':first-child');
        expect(alert).not.toBeNull();

        const style = alert!!.style;
        expect(style).not.toBeNull();

        const expectedThemeColorRgba = getThemeColorRgba(ThemeColor.PRIMARY);
        const r = style.getPropertyValue('--theme-color-r-xs');
        const g = style.getPropertyValue('--theme-color-g-xs');
        const b = style.getPropertyValue('--theme-color-b-xs');
        const a = style.getPropertyValue('--theme-color-a-xs');
        expect(r).toBe(expectedThemeColorRgba.r);
        expect(g).toBe(expectedThemeColorRgba.g);
        expect(b).toBe(expectedThemeColorRgba.b);
        expect(a).toBe(expectedThemeColorRgba.a);
    });
});
