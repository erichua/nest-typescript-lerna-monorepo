export default {
    app:{
        IS_AZURE:true,
        NO_AUTH_ROUTES : [
            '/login', // login
            '/register', // register
            '/password-retrievel', // send password back
        ],
        AJAX_TIMEOUT : 1000 * 60,
        KEEP_ALIVE: false,  //KEEP ALIVE
        HAS_AUTH: true, // NEED AUTH?
        IS_MOCK: true, // USING MOCK
        LAYOUT: {
            LAYOUT_TYPE: 'SIDEMENU',
            HAS_HEADER: true,
            HAS_SIDE: true,
            HAS_TAB: true,
            SIDE_TOGGLE: true,
            KEEP_MENU_OPEN: true,
            FOOTER_HEIGHT: 26
        }
    }
}