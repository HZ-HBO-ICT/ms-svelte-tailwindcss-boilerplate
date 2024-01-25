import { createClient } from '@supabase/supabase-js';
import {describe, it, expect, beforeAll,} from 'vitest';
import key from '../key.js';
import url from '../url.js';

const supabase = createClient(url(), key());
// Initialize Supabase client


export function testAuth() {
    beforeAll(async () => {
        // Setup code if needed, e.g., create test users
    });

    describe('Supabase Authentication', () => {
        it('logs in a user', async () => {
            // Replace these with your actual login credentials for testing
            const email = 'test@user.com';
            const password = 'test1234';

            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            // Test assertions
            expect(error).toBeNull();
            expect(data).toBeDefined();
        });
    });
}
