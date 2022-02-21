export interface BusquedaInt {
    "total_count" : number,
    "incomplete_results" : boolean,
    "items" : Array<
        {
            "id" : number,
            "name" : string,
            "full_name" : string,
            "owner" : {
                "login" : string
            },
            "private" : boolean,
            "html_url" : string,
            "commits_url" : string,
            "git_commits" : string,
        }
    >
}
