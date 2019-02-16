import { config } from "../api/config";

export default {
    loadingStatus: false,
    searchLoaderStatus: false,
    users: {},
    activeUser: {},
    selectedDetailUsername: null,
    searchKeyword: config.DEFAULT_SEARCH_KEYWORD,
    pagination: {}
}