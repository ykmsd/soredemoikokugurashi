import React from 'react';
import ContentSection from './ContentSection';
import Paragraph from '../Typography/Paragraph';
import LinkSection from './LinkSection';
import UpdateSection from './UpdateSection';

const TextSection: React.FC = () => {
  return (
    <>
      <ContentSection>
        <div className="hidden lg:block">
          <LinkSection />
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="text-slate-900 font-title font-normal text-lg lg:text-xl mb-6">
          更新情報
        </h2>
        <div className="max-h-16 overflow-y-auto pr-4 mb-12 border border-slate-200 rounded-lg p-4">
          <ul className="text-slate-600 text-sm leading-relaxed font-light list-none space-y-3">
            <li><span className="inline-block w-14">5月14日:</span><a href="https://ykmsd.booth.pm/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900 transition-colors">BOOTH</a>で購入可能になりました。</li>
            <li><span className="inline-block w-14">5月2日:</span>姉妹書の紹介を追加しました。</li>
            <li><span className="inline-block w-14">5月1日:</span>Webサイトを公開しました。</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection>
        <h2 className="text-slate-900 font-title font-normal text-lg lg:text-xl mb-6">
          目次
        </h2>
        <ul className="text-slate-600 text-base leading-relaxed font-light mb-12 list-none space-y-3">
          <li>45歳、二度目の場所　木内りえ</li>
          <li>ノルウェーで生活をつくる　浅田志穂</li>
          <li>完璧な場所はどこにもないけれど、働くならば……　土井麻未</li>
          <li>私の帰る場所はたぶんパリ　増田祐加</li>
          <li>クリーン アンド リビルド　しょうじあやね</li>
          <li>ニューヨークに来るつもりじゃなかった　chisaco</li>
          <li>漂いながら探す居場所と宙ぶらりんの私　asuka</li>
          <li>苦しい日本の労働環境から逃げておきながら、私は日本の文化を消費して、そして身勝手に、日本が良くなることを祈っている　ぱん</li>
        </ul>

        <h2 className="text-slate-900 font-title font-normal text-lg lg:text-xl mb-6">
          はじめに
        </h2>
        <Paragraph className="text-slate-600 text-base leading-loose font-light">
          海外のテック業界で働きたい、または働いている女性＆ノンバイナリーのためのコミュニティPortを運営している。2017年、私は遠距離恋愛していたフランス人彼氏と一緒に住むために、大好きだった仕事を辞めてエンジニアになることを決意した。今でこそキャリアチェンジして独学でエンジニアになることは珍しくないけれど、当時はかなり突拍子ない感じだった。その上、私はそれを異国のフランスで、フランス語が話せないままやろうとしていたのである。突拍子がなさすぎる。同じようなことをやった人がいないか探してみても、コンピュータサイエンスの学位を持った男性がアメリカまたはカナダで働くまでの体験談しか見つけられず、本当にそんなことができるのか不安しかなかった。それでも後がないので勉強を続けて、色んな人に助けてもらって、無事にパリでフロントエンドエンジニアとして仕事を得ることができた。今度は私が同じように海外で働くことを目指す人たちを助けたいと、コミュニティを作ることにしたのがPortの始まりである。
        </Paragraph>
        <Paragraph className="text-slate-600 text-base leading-loose font-light">
          Twitterで繋がっていた海外で働いている人たちに手伝ってもらって始めたけれど、これから働きたい人だけでなく、すでに働いている人にもコミュニティが必要なのではないかと運営しているうちに思うようになった。海外で仕事を得て、移住して、それでめでたしめでたしで終わりじゃない。働き始めてからも本当に色んなことがある。白人男性だらけのチームでアジア人女性、ノンバイナリーとして働いて、第二言語で仕事をしていく私たちには、話したいこと、聞いてみたいことがたくさんあった。そういうわけで、「海外のテック業界で働きたい、または働いている女性＆ノンバイナリーのためのコミュニティ」という若干長めの名前になっている。
        </Paragraph>
        <Paragraph className="text-slate-600 text-base leading-loose font-light">
          このエッセイ集は、「それでも異国暮らし」を選んでいるPortのエンジニア、デザイナー８人で書いた。異国暮らしのエッセイが好きでよく読むけれど、移民の視点で書かれたものは少ないような気がしていた。特にフランスは「憧れのパリ暮らし」のようなキラキラした感じで書かれることが多い。それはそれで楽しくて好きだし、私の生活にもキラキラした部分は確かに存在しているけど、移民として生きていると嫌なこと苦しいこと悩むこともたくさんある。かといって別に暗い部分ばかりじゃなくて、当たり前に良いことも悪いことも両方ごちゃまぜで、日本に帰りたいと思う日も帰りたくないと思う日もある。そういう、わかりやすく綺麗にまとまっていない異国暮らしの話を読んでみたくて生まれた本だ。だから日本を出ろという煽り本でも、日本を出たらこんな嫌なことが待っているという脅しの本でもない。異国暮らしの楽しさと辛さ、移民として暮らすってどんな感じなのか、なんとなくでも伝えることができたらと思っている。
        </Paragraph>
      </ContentSection>

      <ContentSection>
        <h2 className="text-slate-900 font-title font-normal text-lg lg:text-xl mb-6">
          姉妹書
        </h2>
        <Paragraph className="text-slate-600 text-base leading-loose font-light">
          <a
            href="https://helpful-paletas-bc038c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-900 transition-colors"
          >
            私たちが日本を出る理由 それでも日本で生きていく？
          </a> 
          <p className="mt-2 text-slate-600 text-sm leading-relaxed font-light">
            オランダ、カナダ、アメリカ、日本に住む女性・ノンバイナリの書き手 総勢8名＋ゲスト寄稿者（文筆家ひらりささん）に「日本を出た理由・出ようと思ったきっかけ」をテーマに寄稿を依頼しました。なかなか話しにくい「日本を出る理由」について、日本にいる人は、海外に出てしまった人から聞く術がありません。zineという安全な場所で語られた「日本を出るきっかけや思い」について知ることは、日本に住む人にも新たな刺激やヒントとなると嬉しいです。
          </p>
        </Paragraph>
      </ContentSection>
    </>
  );
};

export default TextSection;