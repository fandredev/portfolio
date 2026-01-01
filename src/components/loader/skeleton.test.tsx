import { render } from "@testing-library/react";
import Skeleton from "./skeleton";

describe("Skeleton component", () => {
  test("should render correctly with default variant", () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton.classList.contains("skeleton")).toBe(true);
    expect(skeleton.classList.contains("skeleton-text")).toBe(true);
  });

  test("should render with different variants", () => {
    const { container: titleContainer } = render(<Skeleton variant="title" />);
    expect((titleContainer.firstChild as HTMLElement).classList.contains("skeleton-title")).toBe(true);

    const { container: circleContainer } = render(<Skeleton variant="circle" />);
    expect((circleContainer.firstChild as HTMLElement).classList.contains("skeleton-circle")).toBe(true);

    const { container: rectContainer } = render(<Skeleton variant="rect" />);
    expect((rectContainer.firstChild as HTMLElement).classList.contains("skeleton-rect")).toBe(true);
  });

  test("should apply custom width and height", () => {
    const { container } = render(<Skeleton width="200px" height="50px" />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton.style.width).toBe("200px");
    expect(skeleton.style.height).toBe("50px");
  });

  test("should apply custom className", () => {
    const { container } = render(<Skeleton className="custom-class" />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton.classList.contains("custom-class")).toBe(true);
  });
});
