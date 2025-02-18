type tag = {
  id: string;
  name: string;
}

type note = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  tags: tag[];
}
