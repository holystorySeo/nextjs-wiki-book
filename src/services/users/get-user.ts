/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiContext, User } from '../../types/data'
import { fetcher } from '../../utils'
export type GetUserParams = {
  /**
   * 사용자 ID
   */
  id: number
}

const signin = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'appliction/json',
        'Content-Type': 'appliction/json',
      },
    },
  )
}

export default signin
