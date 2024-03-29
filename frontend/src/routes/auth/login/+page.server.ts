import type { Actions } from "@sveltejs/kit"
import { fail, redirect } from "@sveltejs/kit"
import { loginUserSchema } from "$lib/schemas"
import { validateData } from "$lib/utils"

export const actions = {
    login: async ({ locals, request }) => {
        const { formData, errors } = await validateData(
            await request.formData(),
            loginUserSchema,
        );

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors,
            });
        }
        try {
            await locals.pb.collection('users').authWithPassword(formData.email, formData.password)
        } catch (e) {
            console.log(e)
            return fail(400, {
                data: formData,
                errors: { login: 'Failed to authenticate' }
            })
        }

        if (!locals.pb?.authStore?.model?.verified) {
            console.log('NOT VERIFIED!')
            locals.pb.authStore.clear();
            redirect(301, '/auth/not-verified')
        }

        throw redirect(303, '/')
    }
} satisfies Actions