import { APIRequestContext } from "@playwright/test";
import { request } from '@playwright/test';

export async function getPersonData() {
    let context: APIRequestContext;
    context = await request.newContext({
        baseURL: 'https://randomuser.me',
      });

    const newRequest = await context.get('/api/?nat=US&password=special,upper,lower,number,8');

    const response = await newRequest.json(); 

    return response.results[0];
};