import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {A11yClicker} from "../src";

describe("A11yClicker", () => {
    test("A11yClicker merely modifies the child", async () => {
        const clickCatcher = jest.fn();
        const {container} = render(
        <div id="root">
            <A11yClicker onClick={clickCatcher}>
                <div id="myObj">Hello world</div>
            </A11yClicker>
        </div>);

        // "Root" is the first child of the rendered doc
        const myObj = container.querySelector("#root > #myObj");
        expect(myObj).not.toBeNull();

        expect(myObj?.getAttribute("tabIndex")).toBe("0");
    });
    test("Div with click handler", async () => {
        const clickCatcher = jest.fn();
        const {container} = render(
            <A11yClicker onClick={clickCatcher}>
                <div id="myObj">Hello world</div>
            </A11yClicker>
        );

        // Element was built
        expect(container.outerHTML).not.toBeNull();

        // Mock function hasn't been called
        expect(clickCatcher.mock.calls.length).toBe(0);

        // Click on element
        const myObj = container.querySelector("#myObj") as HTMLElement;
        fireEvent.click(myObj);

        // Confirm function was called when element was clicked
        expect(clickCatcher.mock.calls.length).toBe(1);

        fireEvent.keyDown(myObj, {
            key: "Enter",
            preventDefault: () => {}
        });
        expect(clickCatcher.mock.calls.length).toBe(2);

        fireEvent.keyDown(myObj, {
            key: " ",
            preventDefault: () => {}
        });
        expect(clickCatcher.mock.calls.length).toBe(3);

        fireEvent.keyDown(myObj, {
            key: "a",
            preventDefault: () => {}
        });
        expect(clickCatcher.mock.calls.length).toBe(3);
    });
})