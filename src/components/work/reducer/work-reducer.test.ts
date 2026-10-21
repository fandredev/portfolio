import { describe, test, expect } from "vitest";

import { Projects } from "../work-data";
import { INITIAL_STATE, workReducer } from "./work-reducer";

describe("workReducer", () => {
  test("CHANGE_TAB updates the tab and the active item", () => {
    const state = workReducer(INITIAL_STATE, {
      type: "CHANGE_TAB",
      payload: { name: "frontend", currentTabActive: 2 },
    });

    expect(state.tab).toBe("frontend");
    expect(state.active).toBe(2);
  });

  test("SET_FILTERED_PROJECTS replaces the filtered projects", () => {
    const projects = [{ id: 1 }] as unknown as Projects[];

    const state = workReducer(INITIAL_STATE, {
      type: "SET_FILTERED_PROJECTS",
      payload: projects,
    });

    expect(state.filteredProjects).toBe(projects);
  });

  test("SET_ACTIVE updates the active item", () => {
    const state = workReducer(INITIAL_STATE, {
      type: "SET_ACTIVE",
      payload: null,
    });

    expect(state.active).toBeNull();
  });

  test("returns the same state for an unknown action", () => {
    const state = workReducer(INITIAL_STATE, {
      type: "UNKNOWN",
    } as never);

    expect(state).toBe(INITIAL_STATE);
  });
});
