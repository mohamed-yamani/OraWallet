import Config from "react-native-config";

const BASE_ENDPOINT = `${Config.BASE_URL}/api/${Config.API_VERSION}`;

interface PostData {
    // Define the shape of the data you are posting here.
    // Example: name: string;
}

export const postToWallet = async (walletId: string, data: PostData) => {
    // const endpoint = `${BASE_ENDPOINT}/wallet/${walletId}`;
    const endpoint = 'http://10.31.3.100:4000/api/v1/wallet/0606060606';

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhb....',
            'AuthNexus': 'eyJhb....'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};
