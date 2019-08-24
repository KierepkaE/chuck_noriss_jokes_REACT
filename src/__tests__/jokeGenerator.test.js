import React from "react";
import Joke from "../joke";
import { render } from '@testing-library/react'
import "@testing-library/dom";


test("Joke component receives props and renders text", () => {
  const { getByTestId } = render(<Joke text="The funniest joke." />);

  expect(getByTestId("joke-text").textContent).toBe("The funniest joke.");

});

