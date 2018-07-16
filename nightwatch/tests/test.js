let pageO = {}
module.exports = {
    before: browser => {
    pageO = browser.page.pageO()
        pageO.navigate()
    },
    after: browser => {
        browser.end()
    },
'Evens and Odds' : () => {
    pageO
        .setValue('@evenOddInput', '1')
        .click('@evenOddButton')
        .verify.containsText('@oddResults','Odds: [1]')
        .clearValue('@evenOddInput')
    },      
'Events and Odds' : () => {
    pageO
        .setValue('@evenOddInput', '4')
        .click('@evenOddButton')
        .verify.containsText('@evenResults','Evens: [4]')
    },
'Filter Object' : () => {
    pageO 
        .setValue('@objectFilterInput', 'age')
        .click('@objectFilterButton')
        .clearValue('@objectFilterInput')
        .setValue('@objectFilterInput','title')
        .click('@objectFilterButton')
        
    },
'Filter String' : () => {
    pageO
        .setValue('@nameFilterInput', 'James, Mark')
    },    
'Palinfrome' : () => {
    pageO
        .setValue('@palindromeInput', ' ')
        .click('@palindromeButton')
        .verify.containsText('@palindromeResults','Palindrome: true')
        .setValue('@palindromeInput', 'w00t')
        .click('@palindromeButton')
        .verify.containsText('@palindromeResults','Palindrome: false')
    },   
'Sum' : browser => { 
    pageO
        .setValue('@sumInput1', '7')
        .setValue('@sumInput2','4')
        .click('@sumButton')
        .verify.containsText('@sumResults', '11')
        browser.pause(5000)
    },
}

