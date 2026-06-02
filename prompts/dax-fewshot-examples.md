Request: total sales
Total Sales = SUM(Sales[Amount])

Request: sales last year
Sales LY =
CALCULATE(
    [Total Sales],
    SAMEPERIODLASTYEAR('Date'[Date])
)
