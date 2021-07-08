


type":"cooking",
"participants":1


type":"relaxation","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"9937387"}

type":"recreational","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"8159356"}

type":"busywork","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://en.wikipedia.org/wiki/Multi-factor_authentication","key":"1572120"}

type":"education","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"https://www.khanacademy.org/","key":"7154873"}

type":"social","participants":1,"price":0.0,"accessibility":"Few to no challenges","duration":"minutes","kidFriendly":true,"link":"","key":"1770521"}

type":"charity","participants":1,"price":0.0,"accessibility":"Minor challenges","duration":"minutes","kidFriendly":false,"link":"","key":"1303906"}

type":"music","participants":1,"price":0.0,"accessibility":"Few to no challenges'","duration":"minutes","kidFriendly":true,"link":"","key":"5188388"}

type":"diy","participants":1,"price":0.3,"accessibility":"Minor challenges","duration":"weeks","kidFriendly":true,"link":"","key":"9216391"}


useEffect(() => {
    searchResultsQuotes()
    if (searchResultsQuotes === {error: "No activity found with the specified parameters"}){
      alert("Please try a different number - this api is rubbish")
    } else{
      .then(setRandomQuote)
      .catch((error) => console.log(error))}
  }, []);



  var loginButton;
if (loggedIn) {
  loginButton = <LogoutButton />;
} else {
  loginButton = <LoginButton />;
}



useEffect(() => {
if (!searchResultsQuotes === {error: "!No activity found with the specified parameters"}){
    searchResultsQuotes()
    .then(setRandomQuote)
    .catch((error) => console.log(error));
} []
} else {
    console.log("Please try a different number - this api is rubbish");
}

When you do { error: "Not ..." } you are trying to compare !searchResultQuote to an object in memory.

You'll want to do something like this if (searchResultsQuote.error === "No activity...") { // Do something when there's an error }    