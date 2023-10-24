import Config from "react-native-config";


interface PostData {
    // Define the shape of the data you are posting here.
    // Example: name: string;
}

export const postToWallet = async (walletId: string, data: PostData, endpointurl: String) => {

    function toFormUrlEncoded(data: any) {
        return Object.entries(data)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
            .join('&');
    }

    const endpoint = `http://10.31.3.104:4000/api/v1/${endpointurl}`

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': 'eyJhb....',
            'AuthNexus': 'eyJhb....'
        },
        body: toFormUrlEncoded(data)
    });

    if (!response.ok) {
        console.log("error: ", response)
        throw new Error('Network response was not ok');
    }

    return response.json();
};
