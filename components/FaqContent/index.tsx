export const FaqContent = () => {

    const questions = [
        {
            question: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nihil.`,
            answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto explicabo architecto ea excepturi facere sunt atque. Autem, fugit dolorem! Sint porro consequatur est illo.`
        },
        {
            question: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nihil.`,
            answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto explicabo architecto ea excepturi facere sunt atque. Autem, fugit dolorem! Sint porro consequatur est illo.`
        },
        {
            question: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nihil.`,
            answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto explicabo architecto ea excepturi facere sunt atque. Autem, fugit dolorem! Sint porro consequatur est illo.`
        },
        {
            question: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nihil.`,
            answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto explicabo architecto ea excepturi facere sunt atque. Autem, fugit dolorem! Sint porro consequatur est illo.`
        }
    ]

    return (
        <div className="w-screen py-12 flex justify-center bg-inherit font-avenir">
            <div className="w-screen sm:w-3/4 h-full">
                <div className="flex w-full h-full flex-col justify-center items-center py-8">
                    <span className="text-6xl text-light">
                        Frequently Asked Questions
                        <br />
                        <br />
                    </span>
                    {questions.map((qna) =>
                            <div className="flex flex-col p-12" key={qna.question}>
                                <span className="text-5xl font-bold h-fit pb-2 text-black">
                                    Question: Lorem ipsum dolor sit amet.
                                </span>
                                <span className="text-4xl text-black">
                                    <b>Answer</b>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptate obcaecati laborum modi dicta earum animi recusandae culpa amet ut.
                                </span>
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}