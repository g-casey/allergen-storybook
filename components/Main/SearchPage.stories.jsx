import SearchPage from "./SearchPage"

export default {
    component: SearchPage
}

export const Primary = {
    args: {
        searchData:
            [
                {
                    "restaurantName": "Wendys",
                    "allergyRating": 4.7,
                    "isOpen": true,
                    "hours": "8-9pm",
                    "distance": 6.3,
                    "containedAllergens": ["Peanuts", "Soy", "Treenuts", "Eggs", "Fish", "Shellfish", "Wheat", "Milk"],
                    "ediblePercentage": 87,
                    "restaurantPic": "https://s3-alpha-sig.figma.com/img/b1ed/d731/080726e29646e370cf09efa56823ec62?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6bXLblibkOLKEcNLI2yg64fuLqnD7PPvKtmMeAl7oqxN1oWJ0W5DvbjbWq795e0S5K5xsMYD9wW9ZdaL8xlSOU6wrPfuDu5QQ5eUMWgkDAlH8XTm5tv6whKYhMywJlJp1gWPuLWFGhJfzde1JDR~WpBvpsk~-dhWa5coQisfsY1Zmrun5-jnXkOOfiluvDEii1e2CjudBUzM~Q~3i~gOdzVhgAXog566E1sfUpcgRUB5B-STkk1FU68GRq6WrIQt4~E2DnZrzg8tLAbhb8~L7MJ0m8vfhsha202nasjpfnRXDBcLBSgtiz4Que6lYFHjtn0mDjR9q9ddWbFbqAmUg__"
                },
                {
                    "restaurantName": "Chilis",
                    "allergyRating": 4.4,
                    "isOpen": true,
                    "hours": "8-9pm",
                    "distance": 10.2,
                    "containedAllergens": ["Soy", "Treenuts", "Shellfish", "Fish"],
                    "ediblePercentage": 98,
                    "restaurantPic": "https://s3-alpha-sig.figma.com/img/84da/87c7/12e1a3643b4fe8404f9507bbc69839ba?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiwC4JIKTzk3jR2OXI7aze5~70wZXgFyjdP68LVsuoga-Y5Np09G6FxjWu7EsDca5tupzFEDGQbxXpRxxIp3T6vzuPfpJSP07TVvsVRo0yeweHXv0EweWnlmC11fEoL76zuwGJ4z41vFWUtQJ7yAfXkmzzxjJHdgheU7q~EXRUOPT-qeFR11IKN0rASTwtE8DFEv~TB8w3xIUTesjyc4~zsIuax4oRjPoKjkFrLlZrkUMOMgKZ7Mc41WUD63tSL4CcF3NpMbsyU9CjWT0aW4zUpZWr7Hu30~XpVIO4XqIVyb31kzmOszibn9kobdD7uknzfqbKHvR4Vik2~dSbBgDg__"
                },
                {
                    "restaurantName": "Long John Silvers",
                    "allergyRating": 4.1,
                    "isOpen": true,
                    "hours": "2pm-10pm",
                    "distance": 6.3,
                    "containedAllergens": ["Soy", "Treenuts", "Shellfish", "Fish"],
                    "ediblePercentage": 74,
                    "restaurantPic": "https://s3-alpha-sig.figma.com/img/a47b/b9c9/a23b7301aeb22d4451588223186ca116?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FQPx57~kzrpTEOAkMYlj~j8tQLQg8uGzACg7G2kJ6qoZanYuDFsjX8OCMgG29b04kmJMzXGsuUGGlXb6vsqt7Gkxw1WkaYhe4OSrb4MAz4T7106ZSgPtH4BPt0bCTPj15GVLhJAhTvQPHjgLd-4lSYH1ehzQG~kGBdzN6CjDjwi4w6aq4pYPdTEh9JNXsnOofEWt-6zfC7ISWcynG~VyXVnlXntLyqF9rtClGzGa30nX6qkae5uoN6J3JPxUAUjsjbvmUf8KKScley7pBqYahLj290vQKfwt19zrMr-U~0VPAxDmfzKwkCRNml2zkN~4EdYWXznRLJumNlJgoWWHow__"
                },
                {
                    "restaurantName": "The Rustic",
                    "allergyRating": 4.1,
                    "isOpen": false,
                    "hours": "2pm-7pm",
                    "distance": 6.3,
                    "containedAllergens": ["Soy", "Treenuts", "Shellfish", "Fish"],
                    "ediblePercentage": 44,
                    "restaurantPic": "https://s3-alpha-sig.figma.com/img/31a2/c079/0d8f44e816dc692d55abb92b4acfd23d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hit9UEXawayF7Y3ERibn67-o0ozqOOUjdg7nY4U3j4ttbYfITxVBVFFpefLkaZAjZuGW4iUym3-7eoShFkdca7usUazuKPtrt3yXqcnWebnOgfHL~QxhXTYvCnAQw-c5lthi1PmLy8a9yHiJGj5693YbmRTKhLXJ8aRbpMhAhBxBD8ERQA8PJFI11btuL4MeaMOik0SCB4Mlu3-dbbes8mwLdY-acSouK4WIJ2bgIPeoCsqXY5ZzIL8QDkWdjV0Z~GyDPvpp-lBPBVo1A7x7pS86JTBeqUspPZGhk9p9egkDVPGmTHJxd7kJDfv0TsSeJwOZZT1eizU2FqLsp7lEFA__"
                }
            ]
    }
}