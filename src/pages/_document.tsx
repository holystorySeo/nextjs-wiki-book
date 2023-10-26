/* 페이지 설명
   - _app.tsx 파일 다음에 실행
   - 공통적으로 활용할 <head>, <meta>, <body> 태그 안에 들어갈 내용 커스텀
   - 만약 <title>, open graph 등이 페이지별로 다른 내용은 각 페이지별로 처리 필요
   - 폰트 임포트, charset, 웹 접근성 관련 태그
   - 언제나 서버에서 실행되므로 브라우저 API나 이벤트 핸들러가 포함된 코드는 실행 불가
   - <Main />을 제외한 부분은 브라우저에서 실행되지 않아 비즈니스 로직 추가 불가
*/

import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// 기본 Document를 MyDocument로 덮어 쓴다
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      // 기본 Documentd의 초기값을 유용한다.
      const initialProps = await Document.getInitialProps(ctx)

      // initialProps에 더해, style을 추가해서 반환한다.
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
