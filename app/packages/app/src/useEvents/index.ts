import registerEvent from "./registerEvent";
import useDeactivateNotebookCell from "./useDeactivateNotebookCell";
import useRefresh from "./useRefresh";
import useSelectLabels from "./useSelectLabels";
import useSetSelectedSamples from "./useSelectSamples";
import useSetColorScheme from "./useSetColorScheme";
import useSetFieldVisibilityStage from "./useSetFieldVisibilityStage";
import useSetGroupSlice from "./useSetGroupSlice";
import useSetSample from "./useSetSample";
import useSetSpaces from "./useSetSpaces";
import useStateUpdate from "./useStateUpdate";

registerEvent("deactivateNotebookCell", useDeactivateNotebookCell);
registerEvent("refresh", useRefresh);
registerEvent("selectLabels", useSelectLabels);
registerEvent("selectSamples", useSetSelectedSamples);
registerEvent("setColorScheme", useSetColorScheme);
registerEvent("setGroupSlice", useSetGroupSlice);
registerEvent("setSample", useSetSample);
registerEvent("setSpaces", useSetSpaces);
registerEvent("stateUpdate", useStateUpdate);
registerEvent("setFieldVisibilityStage", useSetFieldVisibilityStage);

export { default } from "./useEvents";
