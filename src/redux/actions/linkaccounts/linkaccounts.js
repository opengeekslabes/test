export const linkAccountsTypes = {
    GET: {
        USER_TOKEN: 'GET.USER_TOKEN',
        USER_LL_TOKEN: 'GET.USER_LL_TOKEN',
        FB_PAGES: 'GET.FB_PAGES',
        FB_PAGES_DB: 'GET.FB_PAGES_DB',
    },
    SET: {
        USER_TOKEN: 'SET.USER_TOKEN',
        FB_PAGES: 'SET.FB_PAGES',
        POST_PROPS: 'SET.POST_PROPS'        
    },
    POST: {
        FB: 'POST.FB'
    },
}

export const getUserToken = data => ({
    type: linkAccountsTypes.GET.USER_TOKEN,
    data
})

export const getUserLLToken = data => ({
    type: linkAccountsTypes.GET.USER_LL_TOKEN,
    data
})

export const setUserToken = data => ({
    type: linkAccountsTypes.SET.USER_TOKEN,
    data
})

export const getFbPages = data => ({
    type: linkAccountsTypes.GET.FB_PAGES,
    data
})

export const setFbPages = data => ({
    type: linkAccountsTypes.SET.FB_PAGES,
    data
})

export const setPostProps = data => ({
    type: linkAccountsTypes.SET.POST_PROPS,
    data
})

export const postToFB = data => ({
    type: linkAccountsTypes.POST.FB,
    data
})

export const getFbPagesDatabase = data => ({
    type: linkAccountsTypes.GET.FB_PAGES_DB,
    data
})
