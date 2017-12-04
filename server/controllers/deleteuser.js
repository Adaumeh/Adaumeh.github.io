exports.deleteAll = (req, res) => {
  if (process.env.NODE_ENV === 'test') {
    users.truncate({ cascade: true, restartIdentity: true }).then(() => res.status(204).send({}));
  } else {
    res.status(403).send({ message: 'Whoa there' });
  }
};