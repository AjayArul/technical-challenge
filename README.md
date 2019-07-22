*************************************************
> INFO : Adform - Technical Challenge
*************************************************
- Node            : 10.16.0
- Npm             : 6.9.0
- Yarn            : 1.17.3
- react           : 16.8.6
- react-scripts   : 3.0.1
- webpack         : 4.36.1
- boostrap        : 4.3.1
- fontawesome     : 5.9.0


*************************************************
> PROJECT QUICK SETUP 
*************************************************

01. Step-1 : clone the GitHub repository.
git clone https://github.com/AjayArul/technical-challenge-from-adform.git

02. Step-2 : execute following commands to run the Application
```
//run yarn to intall the packages
`yarn`

//run `yarn dev` or `yarn build` command to create public folder with all files.
`yarn dev` or `yarn build` 

//run locally (note: before run `yarn start` run above command)
`yarn start`
now you can access app from http://localhost:8080

//Unit test
`yarn test`
to get the test suites

`yarn test:coverage`
to get the total report

and also you can view the html report from
/coverage/lcov-report/index.html
```

*************************************************
> APPLICATION GUIDE
*************************************************

this campaigns app has 2 pages, one is home another one is campaigns.
you can navigate both pages from the header navigation link.

- Home-Page: just a welcome page with animated welcome text.
- Campaigns-Page: campaigns table with filter.

1. default 12 companigns listed.
2. you can add new campaigns in array format from browser inspect.
    ```
    - eg: `window.AddCampaigns(
            [{"id":24,"name":"Ajay","startDate":"1/1/2019","endDate":"12/12/2019","budget":88377000},
            {"id":25,"name":"Arul","startDate":"11/21/2019","endDate":"11/21/2020","budget":608},
            {"id":26,"name":"Ajay Arul","startDate":"1/1/2018","endDate":"6/20/2018","budget":239507}]
        )`
    ```
3. you can filler by stat-date, end-date and campaigns name.
4. you can reset the filter by clicking reset-icon.
5. pagination - if more than 10 data pagination will display.
