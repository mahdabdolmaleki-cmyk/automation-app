export interface TaskDTO {
    name: string;
    title: string;
    description?: string;
    status?: 'pending' | 'in-progress' | 'completed';

}