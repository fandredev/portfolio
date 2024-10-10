import { Projects } from "../work-data";

export type ItemWorkName = "all" | "frontend" | "backend";

interface WorksReducer {
  tab: ItemWorkName;
  filteredProjects: Projects[];
  active: number | null;
}

export const INITIAL_STATE: WorksReducer = {
  tab: "all",
  filteredProjects: [],
  active: 0,
};

type WorkActions =
  | {
      type: "CHANGE_TAB";
      payload: {
        name: ItemWorkName;
        currentTabActive: number;
      };
    }
  | {
      type: "SET_FILTERED_PROJECTS";
      payload: Projects[];
    }
  | {
      type: "SET_ACTIVE";
      payload: number | null;
    };

export function workReducer(state: WorksReducer, actions: WorkActions) {
  switch (actions.type) {
    case "CHANGE_TAB":
      return {
        ...state,
        tab: actions.payload.name,
        active: actions.payload.currentTabActive,
      };
    case "SET_FILTERED_PROJECTS":
      return {
        ...state,
        filteredProjects: actions.payload,
      };
    case "SET_ACTIVE":
      return {
        ...state,
        active: actions.payload,
      };
    default:
      return state;
  }
}
