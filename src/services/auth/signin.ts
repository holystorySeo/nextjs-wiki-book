/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiContext } from '../../types/data'
import { fetcher } from '../../utils'
export type SigninParams = {
  /**
   * 사용자명
   * 샘플 사용자의 사용자명은 "user"
   */
  username: string

  /**
   * 비밀번호
   * 샘플 사용자의 비밀번호는 "password"
   */
  password: string
}

const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<any> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/auth/sigin`, {
    method: 'POST',
    headers: {
      Accept: 'appliction/json',
      'Content-Type': 'appliction/json',
    },
    body: JSON.stringify(params),
  })
}

export default signin
