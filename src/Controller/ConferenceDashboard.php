<?php

namespace Drupal\commerce_conference\Controller;


use Drupal\Core\Controller\ControllerBase;

/*
 * ConferenceDashboard Controller
 * */
class ConferenceDashboard extends ControllerBase {

  /*
   * {@inheritdoc}
   * */
  public function content(){
    return [
      '#theme' => 'commerce_conference_dashboard',
      '#attached' => array(
        'library' => array(
          'commerce_conference/babel-js',
          'commerce_conference/conferenceAppBundle',
        ),
      ),
    ];
  }
}
