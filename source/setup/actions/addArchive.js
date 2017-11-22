import { createAction } from "redux-actions";
import {
    ADD_ARCHIVE_CREATE_REMOTE_FILE,
    ADD_ARCHIVE_SELECT_REMOTE_FILE,
    ADD_ARCHIVE_SET_CONNECTED,
    ADD_ARCHIVE_SET_CONNECTING,
    ADD_ARCHIVE_SET_SELECTED_TYPE
} from "./types.js";

export const createRemoteFile = createAction(ADD_ARCHIVE_CREATE_REMOTE_FILE);
export const selectRemoteFile = createAction(ADD_ARCHIVE_SELECT_REMOTE_FILE);
export const setConnected = createAction(ADD_ARCHIVE_SET_CONNECTED);
export const setConnecting = createAction(ADD_ARCHIVE_SET_CONNECTING);
export const setSelectedArchiveType = createAction(ADD_ARCHIVE_SET_SELECTED_TYPE);