# kickstart-2017-tdd-kata

##Task 1
   
   - Write Tests for the following String "split":
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

##Task 2  
  In task2.spec.js write two tests:
  - Test that calling ObjectUnderTests.fetchAsyncStuff() calls AsyncCollabarator.fetch().
  - Test that that callback passed to ObjectUnderTests.fetchAsyncStuff() is called if AsyncCollabarator.fetch() is successful. 
##Task 3

 Create a simple bank application with the following features:
 - Deposite into Account
 - Withdraw from an Account
 - Print a bank statement to the console


 ##Acceptance criteria
 Statement should have transactions, in descending order, in the following format:
 ```json
 [
   {
      date: '6/17/2017',
      amount: 500,
      balance: 1400
   },
   {
      date: '6/15/2017',
      amount: -100,
      balance: 900
   },
   {
      date: '6/12/2017',
      amount: 1000,
      balance: 1000
    }
 ]
  ```
   
 ####Bonus:
 - Support transferring funds  between accounts. The transaction should be shown in both origin and target accounts:
