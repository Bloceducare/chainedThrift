export const appRoutes = {
    swap: "/swap",
    purses: "/purses",
    new_purse: "/create-new",
    view_purse: "/view/purse/:id",
    purse: "/purse/:id/*", //this is a nested route hence the asterisk character
};

export const purseRoutes = {
    home: "/",
    chat: "/chat",
    actions: "/actions",
    settings: "/settings",
};

export const absoluteRoutes = {
    landing: "/",
    purses: "/app/purses",
    new_purse: "/app/create-new",
    swap: "/app/swap",
    purse: "/app/purse/:id",
    view_purse: "/app/view/purse/:id",
    purseChat: "/app/purse/:id/chat",
    purseActions: "/app/purse/actions",
    purseSettings: "/app/purse/settings",
};
