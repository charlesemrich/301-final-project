'use strict';

var express = require('express');

var Attend = require('../models/attend'); // Capital for models.
var Event = require('../models/event'); // Capital for models.
var Topic = require('../models/topic'); // Capital for models.
var User = require('../models/user'); // Capital for models.
var Vote = require('../models/vote'); // Capital for models.

var router = express.Router();

router.get('/events',function(req,res) {
  Event.find({}, function(err,events){
    if (err){
      console.log(err);
      res.status(503).json({message: err.message, call: 'GET /events'});
    }
    res.json({events: events});
  });
});

// TODO: Add POST route to create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

router.get('/topics',function(req,res) {
  Topic.find({}, function(err,topics){
    if (err){
      console.log(err);
      res.status(503).json({message: err.message, call: 'GET /topics'});
    }
    res.json({topics: topics});
  });
});

router.get('/topics/:name/:hash',function(req,res) {
  var name = req.params.name;
  var hash = req.params.hash;
  Topic.findOne({name: name, 'eventHash': hash}, '_id', function(err,id){
    if (err){
      console.log(err);
      res.status(503).json({message: err.message, call: 'GET /topics/' + hash});
    }
    res.json({eventHash: id});
  });
});

router.get('/users',function(req,res) {
  User.find({}, function(err,users){
    if (err){
      console.log(err);
      res.status(503).json({message: err.message, call: 'GET /users'});
    }
    res.json({users: users});
  });
});

router.get('/attends',function(req,res) {
  Attend.find({}, function(err,attends){
    if (err){
      console.log(err);
      res.status(503).json({message: err.message, call: 'GET /attends'});
    }
    res.json({attends: attends});
  });
});

router.get('/votes',function(req,res) {
  Vote.find({}, function(err,votes){
    if (err){
      console.log(err);
      res.status(503).json({message: err.message, call: 'GET /votes'});
    }
    res.json({votes: votes});
  });
});

module.exports = router;
