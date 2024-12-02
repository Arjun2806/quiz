import { Container } from "../../components/Container";
import { Answer } from "../../components/Answer";
import { getQuizQuestion } from "../../lib/quiz";

export default async function Page({ params }) {
  const { id } = await params;
  const { question } = await getQuizQuestion(id);

  return (
    <Container as="main" className="flex flex-col gap-5 py-5">
      <h1 className="text-lg font-semibold">{question.title}</h1>
      <Answer answers={question.answers} questionId={id} />
    </Container>
  );
}
