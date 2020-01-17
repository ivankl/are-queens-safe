import Express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import launchServer from './start_server'
import Task from './entities/task';


const app = new Express();


export default () => {
  app.set('view engine', 'pug');
  const envPath = process.env.PATH.split(':')[0].split(path.sep);
  envPath.pop();
  app.use('/assets', Express.static(envPath.join(path.sep)));
  app.use(bodyParser.urlencoded({ extended: false }));
  const tasks = [
    new Task('Ivan', '15.10.1998', 'Ya'),
  ];

  launchServer(app);

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/task/create', (req, res) => {
    res.render('tasks/new', { form: {}, errors: {} });
  });

  app.post('/tasks', (req, res) => {
    console.log(req.user);
    const { date, user, body } = req.body;
    const errors = {};

    if (!user) {
      errors.title = 'User cannot be blank';
    }
    if (!date) {
      errors.title = 'Date cannot be blank';
    }
    if (Object.keys(errors).length === 0) {
      const task = new Task(user, date, body);
      tasks.push(task);
      res.redirect('/');
    }

    res.status(422);
    res.render('tasks/new', { form: req.body, errors });
  });

  app.get('/tasks/list', (req, res) => {
    res.render('tasks/view_all_tasks', { tasks });
  });
};
