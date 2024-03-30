const menu = [
    {
        name: "Home",
        path: "/",
    }, 
    {
        name: "About",
        path: "/about.html",
        submenu: [
            {
                name: "House",
                path: "/house.html",
            },
            {
                name: "Plants",
                path: "/plants.html",
            },
            {
                name: "Cooking",
                path: "/cooking.html",
            },
        ]
    }, 
    {
        name: "Rabbits",
        path: "/rabbits.html",
    },
    {
        name: "Gallery",
        path: "/gallery.html",
    }
    // {
    //     name: "Setting",
    //     path: "/setting.html",
    //     submenu: [
    //         {
    //             name: "Change Theme",
    //             path: "/theme.html",
    //         },
    //         {
    //             name: "Register",
    //             path: "/register.html",
    //         },
    //     ]
    // }
];

export default menu;