import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { faker } from '@faker-js/faker';
import { QuestionComment, QuestionCommentsProps } from '@/domain/forum/enterprise/entities/question-comments';

export function makeQuestionComment(
    override: Partial<QuestionCommentsProps> = {},
    id?: UniqueEntityID
) {
    const questionComment = QuestionComment.create({
        authorId: new UniqueEntityID(),
        questionId: new UniqueEntityID(),
        content: faker.lorem.text(),
        ...override
    },
        id,
    );

    return questionComment;
}